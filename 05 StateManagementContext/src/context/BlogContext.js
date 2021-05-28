// import React, { useState, useReducer } from "react";
// export const Context = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "addBlog":
//       return [...state, { title: `${action.payload} ${state.length + 1} ` }];
//     default:
//       state;
//   }
// };

// export const Provider = ({ children }) => {
//   // const [blogPost, setBlogPost] = useState([]);
//   const [state, dispatch] = useReducer(reducer, []);
//   // const addBlogPost = () => {
//   //   setBlogPost([...blogPost, { title: `Blog Post ${blogPost.length + 1}` }]);
//   // };

//   return (
//     <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
//   );
// };

import createContextData from "./createContextData";
const reducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 1000),
          title: `${action.payload}`,
        },
      ];
    case "delete_blogPost":
      return state.filter((item) => item.id !== action.payload);
    case "edit_blogPost":
      //// My code
      // const fil = state.filter((blog) => action.payload.id !== blog.id);
      // return [
      //   ...fil,
      //   {
      //     id: action.payload.id,
      //     title: action.payload.title,
      //   },
      // ];
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, callBack) => {
    dispatch({ type: "add_blogPost", payload: title });
    if (callBack) {
      callBack();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: "delete_blogPost", payload: id });
};

const editBlogPost = (dispatch) => {
  return (id, title, callBack) => {
    dispatch({ type: "edit_blogPost", payload: { title, id } });
    if (callBack) {
      callBack();
    }
  };
};

export const { Context, Provider } = createContextData(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
