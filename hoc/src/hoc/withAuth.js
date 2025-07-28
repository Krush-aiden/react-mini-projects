import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function withAuth(WithWrapperComponent) {
  return (props) => {
    const isAuth = true;
    const Navigate = useNavigate();

    useEffect(() => {
      if (!isAuth) {
        Navigate("/");
      }
    }, [isAuth, Navigate]);

    return isAuth ? <WithWrapperComponent {...props} /> : <div>NUll</div>;
  };
}

export default withAuth;
