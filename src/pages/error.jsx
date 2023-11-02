import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-opacity-25">
      <div className="p-4 text-4xl text-gray-200">
      {/*}  <p>{error.statusText || error.message}</p>*/}
      <p>It seems like you're lost somewhere</p>
      </div>
    </div>
  );
}

export default ErrorPage;
