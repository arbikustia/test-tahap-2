// function for filtering data table base on local pagination, required when using local pagination
export const filterBody = (body: unknown[], page: number, limit: number) => {
    return body.filter((_, index) => {
      return index >= (page - 1) * limit && index < page * limit
    })
  }
  
  // function for creating list of page number, required when using local pagination
  export const pageListCreator = (data: unknown[], limit: number) => {
    const list = []
    let i = 1
  
    while (data.length - i * limit > 0) {
      list.push(i)
      i++
    }
  
    list.push(i)
  
    return list
  }
  
  // function for creating number of row, required for every table who has row number
  export const getRowNumber = (order: number, limit: number, page: number) => {
    return (order + 1) + (limit * (page - 1))
  }
  
  // function for creating list of page number, required when using local pagination
  export const displayPaginationCreator = (pageList: unknown[], page: number) => {
    const totalPage: number = pageList.length
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
  
  // function for creating list of page number, required when using server pagination
  export const displayPaginationApiCreator = (totalPage: number, page: number) => {
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