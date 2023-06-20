"use client";

import { useChat } from "ai/react";
import "nes.css/css/nes.min.css";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="nes-container with-title is-rounded">
      <h1 className="title">Vercel AI SDK</h1>

      <div>
        {messages?.map((m) => (
          <div className="message-container" key={m.id}>
              <div className="message-list">
              {m.role !== "user" ?
              <section className="message -left">
                <p className="nes-text is-success">AI</p>
                <div className="nes-balloon from-left">
                  {m.content}
                </div>
              </section>
              :
              <section className="message -right">
                <div className="nes-balloon from-right">
                  {m.content}
                </div>
                <p className="nes-text is-primary">User</p>
              </section>
              }
              </div>
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            className="nes-input"
            type="text"
            value={input}
            placeholder="What can I help you with?"
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
