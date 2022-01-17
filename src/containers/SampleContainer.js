import { useEffect } from "react";
import React from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/apiSample"; // lib/api 의 get함수와 헷갈리지 않기!

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log("----");
        console.log(e);
      }
    };
    fn();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => {
    // console.log(sample);
    return {
      post: sample.post,
      users: sample.users,
      // loadingPost: sample.loading.GET_POST,
      // loadingUsers: sample.loading.GET_USER,
      loadingPost: loading["sample/GET_POST"],
      loadingUsers: loading["sample/GET_USER"],
    };
  },
  { getPost, getUsers }
)(SampleContainer);
