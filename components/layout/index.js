import Nav from "../nav";

export default function Layout({ children, title, filter, setFilter, filterType }) {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Nav title={title} filter={filter} setFilter={setFilter} filterType={filterType} />
            <main className="max-w-screen-sm mx-auto px-sm lg:px-0">{children}</main>
        </div>
    )
  }