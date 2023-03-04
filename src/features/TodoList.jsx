import React from "react";
import { useQuery } from "react-query";
import { getTodo, getTodoPage } from "../api/todoApi";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const {page, setPage} = props
  // const [page, setPage] = useState(1);
  const changePage = async (page) => {
    let data = await getTodoPage(page);
    // console.log(data)
    return data;
  };
  const {
    isLoading,
    isError,
    error,
    data: todos,
    // isPreviousData,
  } = useQuery(["todos", page], () => changePage(page), {
    // select : (data) => data.sort( (a,b) => b.id - a.id),
    keepPreviousData: true,
  });

  const { data: pageInfo } = useQuery("todos", getTodo, {
    select: (data) => ({ length: data.length, allPage: Math.floor(data.length / 10) + 1 }),
  });

  return (
    <div className="flex flex-col mt-4 gap-1">
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error : {error.message}</h1>}
      <nav className="flex justify-between items-baseline gap-2 mb-3">
        <div className="flex gap-2 items-baseline">
          <span className="text-lg">Page : </span>
          <input
            className="border border-blue-400 w-12 text-center pl-2"
            min="1"
            max={pageInfo?.allPage}
            type="number"
            value={page}
            onChange={(e) => setPage(e.target.value)}
            readOnly
          />
          <span>/ {pageInfo?.allPage}</span>
        </div>
        <div className="flex gap-1 ">
          <button
            className="btn btn-sm btn-accent btn-outline"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <button
            className="btn btn-sm btn-accent btn-outline"
            disabled={page >= pageInfo?.allPage}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </nav>
      {todos && todos.map((el) => <TodoItem key={el.id} todo={el} />)}
    </div>
  );
}
