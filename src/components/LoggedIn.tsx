import { FormEvent, useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
  AuthLoading,
} from "convex/react";
import { api } from "../../convex/_generated/api";

export default function LoggedIn() {
  const { user, logout } = useKindeAuth();
  const tasks = useQuery(api.tasks.get);

  const [newTaskText, setNewTaskText] = useState("");
  const sendTask = useMutation(api.tasks.send);

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();
    await sendTask({ body: newTaskText });
    setNewTaskText("");
  }

  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth & Convex</h1>
          <div className="profile-blob">
            <div className="avatar">
              {user?.given_name?.[0]}
              {user?.family_name?.[1]}
            </div>
            <div>
              <p className="text-heading-2">
                {user?.given_name} {user?.family_name}
              </p>
              <button className="text-subtle" onClick={logout}>
                Sign out
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="card start-hero">
            <p className="text-body-2 start-hero-intro">Woohoo!</p>
            <p className="text-display-2">
              Your authentication is all sorted.
              <br />
              Build the important stuff.
            </p>
          </div>
          <section className="next-steps-section">
            <Authenticated>Logged in</Authenticated>
            <Unauthenticated>Logged out</Unauthenticated>
            <AuthLoading>Still loading</AuthLoading>
            <h2 className="text-heading-1">Tasks;</h2>
            {tasks?.map(({ _id, text }) => (
              <div key={_id}>{text}</div>
            ))}
            <form onSubmit={handleSendMessage}>
              <input
                value={newTaskText}
                onChange={(event) => setNewTaskText(event.target.value)}
                placeholder="Write a message…"
              />
              <input type="submit" value="Send" />
            </form>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <strong className="text-heading-2">KindeAuth & Convex</strong>
          <p className="footer-tagline text-body-3">
            Visit our{" "}
            <a className="link" href="https://kinde.com/docs">
              help center
            </a>
          </p>

          <small className="text-subtle">
            © 2023 KindeAuth, Inc. All rights reserved
          </small>
        </div>
      </footer>
    </>
  );
}
