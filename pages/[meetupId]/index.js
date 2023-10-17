import MeetupDetail from "\u0016@component/components/meetups/MeetupDetail";

const meetupDetails = (props) => {
  return (
    <>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
        alt="first img"
        title="image"
        address="london"
        description="lorem ipsum cheez macroni"
      />
    </>
  );
};

export default meetupDetails;
