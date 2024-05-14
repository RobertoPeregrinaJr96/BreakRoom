import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function ProfilePage({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // useSelector
  const user = useSelector((state) => state.session.user);
  // console.log("user in component", user['phoneNumber'] )

  if (!user) history.push("/");

  useEffect(() => {}, [dispatch]);
  return (
    <div className=" ">
      <div className=" ">
        <div className=" ">
          {/* {<img className=" " src={`${user?.profileImageUrl}`} />} */}
        </div>
        <div className=" "></div>
        <div className=" ">
          <div className=" ">
            <p>{`First name : ${user.firstName}`}</p>
            <p>{`Last name : ${user.lastName}`}</p>
            <p>{`Phone number : ${
              user["phoneNumber"] ? user.phoneNumber : "* Optional *"
            }`}</p>
            <p>{`Username : ${user.username}`}</p>
            <p>{`Email : ${user.email}`}</p>
          </div>
        </div>

        <div className=" "></div>
      </div>
    </div>
  );
}

export default ProfilePage;
