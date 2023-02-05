// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json({
      name: "Welcome to the MindMate Mental Health Assistance Service API.",
    });
}
