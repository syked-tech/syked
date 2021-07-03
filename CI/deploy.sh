#!/usr/bin/env bash

aws s3 cp build s3://$S3_BUCKET_DEV/ --recursive
