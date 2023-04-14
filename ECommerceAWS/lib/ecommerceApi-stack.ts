import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import * as lambdaNodeJs from "aws-cdk-lib/aws-lambda-nodejs"
import * as apigateway from "aws-cdk-lib/aws-apigateway"
import * as cwlogs from "aws-cdk-lib/aws-logs"

export class ECommerceApiStack extends cdk.Stack {
    
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        const api = new apigateway.RestApi(this, "ECommerceApi", {
            restApiName: "ECommerceApi"
        })
    }

}