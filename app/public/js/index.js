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
    case "/edit.html":
      const uid = window.location.search.split("?uid=")[1]
      document.getElementById("save-btn")
        .addEventListener("click", () => {
          return userModule.saveUser(uid)
        })
        document.getElementById("cancel-btn")
        .addEventListener("click", () => {
          return window.location.href = "/"
        })
        document.getElementById("delete-btn")
          .addEventListener("click", () => {
            return userModule.deleteUser(uid)
          })
       return userModule.setExistingValue(uid)
      default:
    break;
  }
  })()