
import './App.css';
import List from './components/List';
import Rotate from './components/RotatePoints';

export default function App() {
  return (
    <>
      <div className="container py-4">
        <header className="pb-3 mb-4">Dawid Kuptel</header>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container py-5">
            <h1 className="display-5 fw-bold">Custom jumbotron</h1>
            <div className="row">
              <div className="col-md-6 fs-4">
                Using a series of utilities, you can create this jumbotron, just
                like the one in previous versions of Bootstrap. Check out the
                examples below for how you can remix and restyle it to your
                liking.
              </div>
              <div className="col-md-6 fs-4 text-center">
                <img
                  src="./pictures/moje.png"
                  className="my_photo"
                  alt="My photo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light rounded-3">
              <section>
                <h2 className="skills-header">
                  <span>
                    <Rotate />
                  </span>
                  Skills
                </h2>
              </section>

              <p>
                <List />
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Add borders</h2>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as ve adjusted the alignment and sizing
                of both s content for equal-height.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
