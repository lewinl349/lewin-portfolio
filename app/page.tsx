import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Sidebar from "./ui/sidebar";

export default function Home() {
  return (
    <main className="flex flex-row">
      <title>Home</title>

      <Sidebar />

      <div className="grow gap-2 flex-col justify-between p-12 max-w-7xl mx-auto">

      <div>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-6xl text-blue-500"><b>Lewin Lin</b></h1>
          <p><b>Computer Science</b> Student at <i>McMaster University</i></p>
        </div>

        <div>
          <ul>
            <div className="flex flex-row gap-2">
              <FaGithub/>
              <li>
                  Github: {" "}        
                <a
                  className="text-blue-600 underline"
                  href="https://github.com/lewinl349/">
                  @lewinl349
                </a>
              </li>
            </div>
            <div className="flex flex-row gap-2">
              <FaLinkedin />
              <li className="vertical-align: middle;"> 
                LinkedIn: {" "}
                <a
                  className="text-blue-600 underline"
                  href="https://www.linkedin.com/in/lewin-lin">
                  @lewin-lin
                </a>
              </li> 
            </div>
          </ul>
        </div>

      </div>

      <br></br>

      <div className="flex flex-col gap-2">
        <h2 className="text-4xl">Skills</h2>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 p-4 border rounded shadow-md hover:bg-sky-100">
            <h3 className="text-3xl text-bold">Programming Languages</h3>
            <li>Python</li>
            <li>Java</li>
            <li>Elm</li>
          </div>
          <div className="p-4 border rounded shadow-md hover:bg-sky-100">
            <h3 className="text-3xl text-bold">Tools</h3>
            <li>VS Code</li>
            <li>Github</li>
            <li>Google Workplace</li>
            <li>Microsoft 365</li>
          </div>
        </div>
      </div>

      </div> 
      
      </div>

    </main>
  )
}