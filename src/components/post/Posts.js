const Posts = () => {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return <div>{JSON.stringify(postsState)}</div>;
};

export default Posts;
