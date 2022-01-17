const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h1>POST</h1>
        {loadingPost && "LOADING..."}
        {!loadingPost &&
          post && ( // 유효성 검사 필수
            <div>
              <h3>{post.title}</h3>
              <h3>{post.body}</h3>
            </div>
          )}
      </section>
      <hr />
      <section>
        <h1>USER LIST</h1>
        {loadingUsers && "LOADING..."}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
