import Sidebar from "@/app/ui/sidebar";

export default function Page() {
    return (
        <main className="flex flex-row">
            <title>Projects</title>
            <Sidebar />
            <div className="grow gap-2 flex-col justify-between p-12 max-w-7xl mx-auto">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl"><b>Projects</b></h1>

                <br></br>

                <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                    <div className="p-4 border rounded shadow-md">
                        <h3 className="text-3xl text-bold">Project Alpha</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="p-4 border rounded shadow-md">
                        <h3 className="text-3xl text-bold">Project Beta</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="p-4 border rounded shadow-md">
                        <h3 className="text-3xl text-bold">Project Gamma</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="p-4 border rounded shadow-md">
                        <h3 className="text-3xl text-bold">Project Delta</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}