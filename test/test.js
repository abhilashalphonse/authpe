const Billing = require("../models/billing");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();

chai.use(chaiHttp);

describe("billing", () => {
  beforeEach((done) => {
    Billing.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET billing", () => {
    it("it should GET all the billing", (done) => {
      chai
        .request(app)
        .get("/api/billing")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST billing", () => {
    it("it should new POST a billing", (done) => {
      let billing = {
        firstName: "First",
        secondName: "Second",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      };
      chai
        .request(app)
        .post("/api/billing")
        .send(billing)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id billing", () => {
    it("it should GET a billing by the id", (done) => {
      let billing = new Billing({
        firstName: "First",
        secondName: "Second",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      billing.save((err, billing) => {
        chai
          .request(app)
          .get("/api/billing/" + billing.id)
          .send(billing)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id billing", () => {
    it("it should UPDATE a billing given the id", (done) => {
      let billing = new Billing({
        firstName: "First",
        secondName: "Second",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      billing.save((err, billing) => {
        console.log(billing.id);
        chai
          .request(app)
          .put("/api/billing/" + billing.id)
          .send({
            firstName: "First",
            secondName: "Second",
            image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id billing", () => {
    it("it should DELETE a billing given the id", (done) => {
      let billing = new Billing({
        firstName: "First",
        secondName: "Second",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      billing.save((err, billing) => {
        chai
          .request(app)
          .delete("/api/billing/" + billing.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
});
