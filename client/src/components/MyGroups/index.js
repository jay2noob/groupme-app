import React, { useState, useEffect } from "react";
import { getMyGroups } from "../../actions/group";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyGroupsCard from "./MyGroupsCard";
import Spinner from "../Spinner/Spinner";
import "./styles.css";

function MyGroupsContainer({ getMyGroups, myGroups }) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [nextPage, setNextPage] = useState(false);
  console.log("myGroups Effect", myGroups, page);

  // const throttle = (fn, wait) => {
  //   var time = Date.now()
  //   return () => {
  //     if ((time + wait - Date.now()) < 0) {
  //       fn()
  //       time = Date.now()
  //     }
  //   }
  // }

  useEffect(() => {
    if (myGroups.length === 0) {
      getMyGroups({ page });
    }

    setLoading(false);
    /// use debounce function to limit the number of requests sent to server if the user scrolls up and down too quiclky
    const onScroll = (e) => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight && !nextPage) {
        setNextPage(true);
        setTimeout(async () => {
          const updatePage = page + 1;
          console.log("Bottom Reached", updatePage);
          getMyGroups({ page: updatePage });
          setPage(updatePage);
          setNextPage(false);
        }, 1000);
      } else {
        console.log("Not Yet");
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="mygroups-card-container">
      <h2 className="mygroups-heading">My Groups</h2>
      {loading ? <Spinner /> : null}
      {myGroups && (myGroups.length ? (
        myGroups.map((myGroup) => (
          <MyGroupsCard myGroup={myGroup} key={myGroup._id} />
        ))
      ) : (
        <h3>No Groups to show</h3>
      ))}
    </section>
  );
}

MyGroupsContainer.propTypes = {
  myGroups: PropTypes.array,
};

const mapStateToProps = (state) => ({
  myGroups: state.group.myGroups,
});

export default connect(mapStateToProps, { getMyGroups })(MyGroupsContainer);
