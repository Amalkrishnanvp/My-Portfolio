const userController = {
  // Controller function to get home page
  async getHomePage(req, res) {
    try {
      res.render("user/home");
    } catch (error) {
      console.error("Error rendering homepage:", error);
      return res.status(500).send("Internal Server Error");
    }
  },
};

export default userController;
