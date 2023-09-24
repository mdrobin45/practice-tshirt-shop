const useTitle = (title) => {
   return <div>{(document.title = title)}</div>;
};

export default useTitle;
