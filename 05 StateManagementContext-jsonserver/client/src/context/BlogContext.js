import createContextData from "./createContextData";
import JsonServer from "../api/JsonServer";
const reducer = (state, action) => {
  switch (action.type) {
    case "get_blogPost":
      return action.payload;
    case "delete_blogPost":
      return state.filter((item) => item.id !== action.payload);
    case "edit_blogPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await JsonServer.get("/blogPosts");
    dispatch({ type: "get_blogPost", payload: response.data });
  };
};

const addBlogPost = () => {
  return async (title, callBack) => {
    await JsonServer.post("/blogPosts", { title });
    if (callBack) {
      callBack();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await JsonServer.delete(`/blogPosts/${id}`);
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, callBack) => {
    await JsonServer.put(`/blogPosts/${id}`, { title });
    dispatch({ type: "edit_blogPost", payload: { title, id } });
    if (callBack) {
      callBack();
    }
  };
};

export const { Context, Provider } = createContextData(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
