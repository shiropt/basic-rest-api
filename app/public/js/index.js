const indexModule = (() => {
  const path = window.location.pathname

  switch (path) {
   case "/":
    document.getElementById("search-btn")
      .addEventListener("click", () => {
        return searchModule.searchUsers()
        })
        return userModule.fetchAllUsers()
    case "/create.html":
      document.getElementById("save-btn")
        .addEventListener("click", () => {
          return userModule.createUser()
        })
      document.getElementById("cancel-btn")
        .addEventListener("click", () => {
          return window.location.href = "/"
        })
      break;
      default:
    break;
  }
  })()