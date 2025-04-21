import { nanoid } from "nanoid";
import "../../../styles/components/_reviewPosts.scss";
import { listReviews } from "../constants";
import goldStar from "../../../assets/goldStar.svg";
const ReviewPosts = () => {
  return (
    <section className="reviewPostsContainer">
      <ul>
        {listReviews?.map((post) => (
          <li className="post" key={post.id}>
            <div className="starsAndNameAndCreateDateContainer">
              <div className="starsAndNameContainer">
                <span className="userName">{post.userName}</span>{" "}
                {
                  <ul className="listStars">
                    {Array.from({ length: post.amountStars }).map(() => (
                      <li key={nanoid()}>
                        <img className="goldStar" src={goldStar} alt="" />
                      </li>
                    ))}
                  </ul>
                }
              </div>
              <span className="dateCreated">{post.dateCreated}</span>
            </div>
            <span className="messagePost">{post.message}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReviewPosts;
