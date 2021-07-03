#!/usr/bin/env bash

# Install the AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip -qq awscliv2.zip
./aws/install

# Set ~/.aws/credentials
aws configure set aws_access_key_id "$AWS_ACCESS_KEY_ID"
aws configure set aws_secret_access_key "$AWS_SECRET_ACCESS_KEY"
aws configure set default.region "$AWS_DEFAULT_REGION"

# Install yarn as outlined in (https://yarnpkg.com/lang/en/docs/install/#alternatives-stable)
curl -o- -L https://yarnpkg.com/install.sh | bash

# Make available in the current terminal
export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
