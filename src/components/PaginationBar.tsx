import Link from "next/link";

interface PaginationBar {
  currentPage: number;
  totalPages: number;
}

export default function PaginationBar({
  currentPage,
  totalPages,
}: PaginationBar) {
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));
  const numsPageItems: JSX.Element[] = [];

  for (let page = minPage; page <= maxPage; page++) {
    numsPageItems.push(
      <Link
        href={"?page=" + page}
        key={page}
        className={`่join item btn ${
          currentPage === page ? "btn-active pointer-events-none" : ""
        }`}
      >
        {page}
      </Link>,
    );
  }

  return (
    <>
      <div className="join hidden sm:block">{numsPageItems}</div>
      <div className="join block sm:hidden">
        {currentPage > 1 && (
          <Link href={"?page=" + (currentPage - 1)} className="btn join-item">
            «
          </Link>
        )}
        <button className="join-item btn pointer-events-none">
          Page{currentPage}
          {currentPage < totalPages && (
            <Link href={"?page=" + (currentPage + 1)} className="btn join-item">
               »
            </Link>
          )}
        </button>
      </div>
    </>
  );
}
