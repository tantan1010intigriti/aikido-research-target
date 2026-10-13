resource "aws_s3_bucket" "b" {
  bucket = "zq-test"
  acl    = "public-read"
}
