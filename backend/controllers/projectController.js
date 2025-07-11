const projectController = {
  // Controller function to get ecommerce project details
  async getEcommerceDetails(req, res) {
    try {
      res.render("user/ecommerce");
    } catch (error) {
      console.error("Error getting ecommerce project details:", error);
      return res.status(500).send("Internal Server Error");
    }
  },

  async getMovieSearchDetails(req, res) {
    try {
      res.render("user/movieSearch");
    } catch (error) {
      console.error("Error getting movie search project details:", error);
      return res.status(500).send("Internal Server Error");
    }
  },
};

export default projectController;
