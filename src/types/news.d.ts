type News = {
  id: number;
  subject: string;
  text: string;
  start: Date;
  end: string;
  author: string;
  description: string;
};

type Pagination = {
  paging: {
    pageCount: number;
    totalItemCount: number;
    pageNumber: number;
    pageSize: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    isFirstPage: boolean;
    isLastPage: boolean;
    firstItemOnPage: number;
    lastItemOnPage: number;
  };
  data: News[];
};
