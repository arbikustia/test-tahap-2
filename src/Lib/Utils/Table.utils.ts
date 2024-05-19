// function for creating number of row, required for every table who has row number
export const getRowNumber = (order: number, limit: number, page: number) => {
  return order + 1 + limit * (page - 1);
};

// function for creating list of page number, required when using server pagination
export const displayPaginationCreator = (totalPage: number, page: number) => {
  const currentPage: number = page

  const temp = []
  if (totalPage <= 5) {
    for (let i = 0; i < totalPage; i++) {
      temp.push({
        value: i + 1,
        text: i + 1,
      });
    }
  } else if (currentPage - 2 <= 1) {
    let x = 0;
    const index = totalPage > 5 ? 5 : totalPage;
    for (let i = 0; i < index; i++) {
      temp.push({
        value: i + 1,
        text: i + 1,
      });
      x = i;
    }
    temp.push({
      value: x + 1 - 1,
      text: '...',
    });
    temp.push({
      value: totalPage,
      text: totalPage,
    });
  } else if (currentPage + 2 >= totalPage) {
    temp.push({
      value: 1,
      text: 1,
    });
    temp.push({
      value: totalPage - 5,
      text: '...',
    });


    for (let i = totalPage - 4; i <= totalPage; i++) {
      temp.push({
        value: totalPage - (totalPage - i),
        text: totalPage - (totalPage - i),
      });

    }
  } else {
    temp.push({
      value: 1,
      text: 1,
    });
    temp.push({
      value: currentPage - 3,
      text: '...',
    });
    for (
      let i = Number(currentPage) - 2;
      i <= Number(currentPage) + 2;
      i++
    ) {
      temp.push({
        value: i,
        text: i,
      });
    }
    temp.push({
      value: currentPage + 3,
      text: '...',
    });
    temp.push({
      value: totalPage,
      text: totalPage,
    });
  }
  return temp
}