import styled from 'styled-components'

const Technologies = styled.div`
   display: flex;
   flex-wrap: wrap;
`
const Technology = styled.div`
   flex: 1 0 200px;
   padding: 2px 5px;
`

const Tool = styled.div`
   display: flex;
`

const ToolText = styled.div`
   font-size: 18px;
   margin-left: 5px;
   flex: 1 0 0;
`

const ToolImg = styled.div`
   flex: 0 0 30px;
   img {
      width: 100%;
      padding: 3px;
   }
`

const TechnologyTitle = styled.div`
   width: 100%;
   padding-bottom: 20px;
`

function ToolComponent({img, txt}) {
   return (
      <Tool>
         <ToolImg><img src={`/${img}`} alt=""/></ToolImg>
         <ToolText>{txt}</ToolText>
      </Tool>
   )
}

let toolsFinder = {
   "lambda": {img: "lambda.svg", txt: "Lambda"},
   "api": {img: "api_gateway.svg", txt: "API Gateway"},
   "cloudfront": {img: "cloudfront.svg", txt: "CloudFront"},
   "dynamo": {img: "dynamo.svg", txt: "DynamoDB"},
   "python": {img: "python.png", txt: "Python"},
   "next": {img: "next.png", txt: "next.js"},
   "react": {img: "react.svg", txt: "React"},
   "redux": {img: "redux.png", txt: "Redux"},
   "svg": {img: "svg.png", txt: "SVG"},
   "sqs": {img: "sqs.png", txt: "SQS"},
   "cloudformation": {img: "cloudformation.svg", txt: "CloudFormation"},
   "cognito": {img: "cognito.svg", txt: "Cognito"},
   "vpc": {img: "vpc.png", txt: "VPC"},
   "ec2": {img: "ec2.svg", txt: "EC2"},
   "autoscaling": {img: "autoscaling.png", txt: "Autoscaling"},
   "codedeploy": {img: "codedeploy.svg", txt: "CodeDeploy"},
   "s3": {img: "s3.png", txt: "S3"},
   "codepipeline": {img: "codepipeline.png", txt: "CodePipeline"}
 }
 
 export default function TechnologiesSection(props) {
   return (
      <Technologies>
         {props.backend &&
            <Technology>
               <TechnologyTitle><b>Backend</b></TechnologyTitle>
               {props.backend.map((tool, index) => {
                  return <ToolComponent key={`backend-${index}`} img={toolsFinder[tool].img} txt={toolsFinder[tool].txt} />
               })
               }
            </Technology>
         }
         {props.frontend &&
            <Technology>
               <TechnologyTitle><b>Frontend</b></TechnologyTitle>
               {props.frontend.map((tool, index) => {
                  return <ToolComponent key={`backend-${index}`} img={toolsFinder[tool].img} txt={toolsFinder[tool].txt} />
               })
               }
            </Technology>
         }
         {props.infrastructure &&
            <Technology>
               <TechnologyTitle><b>Infrastructure</b></TechnologyTitle>
               {props.infrastructure.map((tool, index) => {
                  return <ToolComponent key={`backend-${index}`} img={toolsFinder[tool].img} txt={toolsFinder[tool].txt} />
               })
               }
            </Technology>
         }
      </Technologies>
   )
 }
 