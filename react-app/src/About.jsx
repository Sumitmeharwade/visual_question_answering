import React from "react";
// import "./About.css"; // Ensure you have this CSS file imported
import "./Styles/about.css";
import vilt from "./images/vilt.jpg";

const About = () => {
  return (
    <div id="e-about">
      <div id="ab-part1">
        <div className="intro">
          <p>
            <p className="p1">
              Introduction to Visual Question <br />
            </p>
            <p className="p2">Approaches and Evaluation</p>
          </p>
        </div>
        <img
          src="https://tryolabs.imgix.net/assets/blog/2018-03-01-introduction-to-visual-question-answering/2018-03-01-visual-question-answering-7c03d045f9.jpg?auto=format&fit=max&w=1920"
          alt="About VQA"
          className="vilt"
        />
      </div>

      <div id="ab-part2">
        <p>
          Historically, building a system that can answer natural language
          questions about any image has been considered a very ambitious goal.
          Imagine a system that, given the image below, could answer these
          questions:
        </p>

        <ul>
          <li>What is in the image?</li>
          <li>Are there any humans?</li>
          <li>What sport is being played?</li>
          <li>Who has the ball?</li>
          <li>How many players are in the image?</li>
          <li>Who are the teams?</li>
          <li>Is it raining?</li>
        </ul>

        <img
          src="https://tryolabs.imgix.net/assets/blog/2018-03-01-introduction-to-visual-question-answering/visual-question-answering-aa6ecaa14a.jpg?auto=format&fit=max&w=1200"
          alt="Example VQA"
          className="vilt"
        />

        <p>
          So, how many players are in the image? Well, we can count them and see
          that there are eleven players, since we are smart enough not to count
          the referee, right? Although as humans we can normally perform this
          task without major inconveniences, the development of a system with
          these capabilities has always seemed closer to science fiction than to
          the current possibilities of Artificial Intelligence (AI). However,
          with the advent of Deep Learning (DL), we have witnessed enormous
          research progress in Visual Question Answering (VQA), in such a way
          that systems capable of answering these questions are emerging with
          promising results. In this article I will briefly go through some of
          the current datasets, approaches and evaluation metrics in VQA, and on
          how this challenging task can be applied to real life use cases.
        </p>

        <div id="part6">
          <h1>A multi-discipline problem</h1>
          <p>
            n a general way we can define a VQA system as an algorithm that
            takes as input an image and a natural language question about the
            image and generates a natural language answer as the output. This is
            by nature a multi-discipline research problem. Let’s take, for
            example, the questions about the previous image. We need NLP for at
            least two reasons: to understand the question and to generate the
            answer. These are common problems in text-based Q&A, a well studied
            problem in NLP. Given the following sentence:
          </p>

          <div id="part7">
            <h1>A NLP Q&A system is typically going to:</h1>

            <div>
              <p>
                1. Classify or type the question: this is a "how many" question,
                so the response must be a number.
              </p>
              <p>
                2. Understand the question: the system must understand that the
                question is asking for a count of something.
              </p>
              <p>
                3. Generate the answer: the system must generate the number of
                players in the image.
              </p>
            </div>
            <p>
              The main difference in VQA is that the search and the reasoning
              part must be performed over the content of an image. So, to answer
              if there are any humans, the system must be able to detect
              objects. To say if it is raining, it needs to classify a scene. To
              answer who are the teams, the system needs world knowledge.
              Finally, to say which player has the ball, commonsense reasoning
              and, very likely, knowledge reasoning are necessary. Many of these
              tasks (object recognition, object detection, scene classification,
              etc.) have been addressed in the field of Computer Vision (CV),
              with impressive results in the last few years. So, as we can see,
              a good VQA system must be capable of solving a broad spectrum of
              typical NLP and CV tasks, as well as reasoning about image
              content. It is clearly a multi-discipline AI research problem,
              involving CV, NLP and Knowledge Representation & Reasoning (KR).
            </p>
          </div>

          <div id="part8">
            <h1>Cureent Approches</h1>

            <h2 style={{ fontWeight: "500" }}>
              In general, we can outline the approaches in VQA as follows:
            </h2>

            <div>
              <p>1.Extract features from the question.</p>
              <p>2.Extract features from the image.</p>
              <p>3.Combine the features to generate an answer.</p>
            </div>

            <img src={vilt} alt="vilt" className="vilt" />

            <p>
              Thus, the main difference between several approaches is how they
              combine the textual and image features. For example, they can
              simply combine them using concatenation and then feed a linear
              classifier. Or they can use Bayesian models to infer the
              underlying relationships between the feature distributions of the
              question, the image and the answer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
