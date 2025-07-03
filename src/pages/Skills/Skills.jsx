import { useTranslation } from "react-i18next";

export default function Projects() {
  return (
    <main>
      <div>
        LANGUAGE
        <li>
          JavaScript
          Python
          C++
          Java
        </li>
      </div>
      <div>
        FRONT-END
        <li>
          React
          Next.js
          HTML5
          CSS3
        </li>
      </div>
      <div>
        BACK-END / API
        <li>
          Node.js
          Discord.js
          OpenAI API
        </li>
      </div>
      <div>
        INFRA
        AWS
        <li>
          EC2
          S3
          Translate
          Lambda
          DynamoDB
        </li>
        Vercel
      </div>
      <div>
        AI
        <li>
          torch
          Tensor
          Transformer
          RNN
          MCP / Agent
        </li>
      </div>
    </main>
  );
}
