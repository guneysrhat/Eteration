
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getSuccess,
} from "../features/productSlice";
import { axiosPublic } from "./useAxios";


const useProductCalls = () => {
  const dispatch = useDispatch();


  //!------------- GET CALLS ----------------
  const getData = async () => {
    dispatch(fetchStart());
    try {
        const [products] = await Promise.all([
            axiosPublic.get("products"),
          ]);
      dispatch(getSuccess([products?.data]));
    } catch (error) {

    console.error("Error fetching data:", error);
      dispatch(fetchFail());
    }
  };


  return {
    getData
  };
};

export default useProductCalls;
