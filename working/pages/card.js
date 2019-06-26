import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardFooterItem,
  CardImage,
  Container,
  Column,
  Columns,
} from '@brightleaf/elements'

export default () => {
  return (
    <Container>
      <Card>
        <CardHeader>Head</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>
          {' '}
          <CardFooterItem>
            <a href="#">Save</a>
          </CardFooterItem>
          <a href="#" className="card-footer-item">
            Edit
          </a>
          <a href="#" className="card-footer-item">
            Delete
          </a>
        </CardFooter>
      </Card>
      <hr />
      <Columns>
        <Column isOneQuarter>
          <Card>
            <CardImage
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
            <CardBody>
              <p className="title">
                {
                  '"There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."'
                }
              </p>
              <p className="subtitle">Jeff Atwood</p>
            </CardBody>
            <CardFooter>
              <CardFooterItem>
            <p  >
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    </CardFooterItem>
    <CardFooterItem>
    <p  >
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p></CardFooterItem>
            </CardFooter>
          </Card>
        </Column>
      </Columns>
    </Container>
  )
}
