import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [sort, setSort] = useState("asc");
  const [submited, setSubmited] = useState("");
  const [search, setSearch] = useState("");
  const [id, setid] = useState("id");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //setLoading(false);
    const data = async () => {
      const dummy = await fetch(
        `http://localhost:3001/photos?q=${submited}&_sort=${id}&_order=${sort}`
      );
      const parse = await dummy.json();
      setPhotos(parse);
      setLoading(false);
    };
    data();
  }, [sort, submited]);

  useEffect(() => {
    //setLoading(true);
    const data = async () => {
      const dummy = await fetch("http://localhost:3001/photos");
      const parse = await dummy.json();
      setPhotos(parse);
      setLoading(false);
    };
    data();
  }, []);

  const getSort = () => {
    const data = [...photos];
    // if (sort === "asc") {
    //   data.sort((a, b) => (a.id < b.id ? -1 : 1));
    //   return 0;
    //       setPhotos(data);
    // }
    if (sort === "desc") {
      data.sort((a, b) => (a.id < b.id ? 1 : -1));
      setPhotos(data);
    }
    console.log(data);
  };

  if (error)
    return (
      <h1 style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
        Error!
      </h1>
    );

  return (
    <>
      <div className="container">
        <div className="options">
          <select
            onChange={(e) => setSort(e.target.value)}
            data-testid="sort"
            onClick={getSort}
            className="form-select"
            style={{}}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmited(search);
            }}
          >
            <input
              type="text"
              data-testid="search"
              onChange={(e) => setSearch(e.target.value)}
              className="form-input"
            />
            <input
              type="submit"
              value="Search"
              data-testid="submit"
              className="form-btn"
            />
          </form>
        </div>
        <div className="content">
          {loading ? (
            <h1
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Loading...
            </h1>
          ) : (
            photos.map((photo) => {
              return <Card key={photo.id} photo={photo} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Photos;
