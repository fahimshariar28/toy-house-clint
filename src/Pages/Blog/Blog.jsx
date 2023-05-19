const Blog = () => {
  return (
    <div className="w-9/12 mx-auto my-10 flex flex-col gap-5">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            An access token is a credential used to authenticate and authorize a
            client to access protected resources, while a refresh token is used
            to obtain a new access token when the current one expires. They
            should be securely stored on the client-side, typically in memory or
            a secure storage mechanism like encrypted cookies or browsers local
            storage.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            SQL databases are structured, relational databases that use
            structured query language for data manipulation and have predefined
            schemas, while NoSQL databases are non-relational, schema-less
            databases that provide flexible data models and horizontal
            scalability.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS ?
        </div>
        <div className="collapse-content">
          <p>
            Express.js is a lightweight Node.js framework for building web
            applications, while NestJS is a TypeScript-based framework that
            extends Express.js with additional features and a modular
            architecture.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            MongoDBs aggregate is a powerful method used for performing advanced
            data aggregation operations on collections. It allows for flexible
            querying and manipulation of data using a pipeline of stages,
            including filtering, grouping, sorting, transforming, and combining
            data, providing powerful aggregation capabilities within the
            database itself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
