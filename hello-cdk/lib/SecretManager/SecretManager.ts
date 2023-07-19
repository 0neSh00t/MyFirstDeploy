import { Stack, StackProps } from "aws-cdk-lib";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import { Construct } from "constructs";


export class SecretsManagerRep extends Stack {
    public readonly sct_server: Secret;

    constructor(
        scope: Construct,
        id: string,
        props: StackProps

    ) {
        super(scope, id, props);

        this.sct_server = new Secret(this, 'TemplateSecreteServer', {
            secretName: "SecretMang-Server-Test",
            generateSecretString: {
                secretStringTemplate: JSON.stringify({
                    username: process.env.DB_USER,
                    password: process.env.DB_PASS,

                }),
                generateStringKey: "key"
            },
        });



    }



}



