import data from "../data/folderData";

const PageList = ({ pageList }) => {
  return (
    <div className="PageList">
      <h2>글목록</h2>
      <div>
        {pageList.map((i) => (
          <div>
            <div> {i.date}</div>
            <div> {i.title}</div>
            <div> {i.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageList;
