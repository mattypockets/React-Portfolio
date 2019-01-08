import React from "react";
import { Section, Columns, Column, Title, Field, FieldLabel, FieldBody, Input, Control, Button, Label, TextArea } from "bloomer";
import "./Contact.css";

class Contact extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <Section>
                    <Columns isCentered>
                        <Column>
                            <div className="contactTitle">
                            <Title><span className="header">Contact</span></Title>
                            <div className='notAnHrLeft'></div>
                            </div>
                            <form action="mailto:mrgasper27@gmail.com" method="post" encType="text/plain">
                                <Columns>
                                    <Column isSize='1/3'>
                                        <Field>
                                            <Label>Name:</Label>
                                            <Control>
                                                <Input placeholder='David Byrne' />
                                            </Control>
                                        </Field>
                                        <Field>
                                            <Label>Email:</Label>
                                            <Control>
                                                <Input placeholder='david@talkingheads.com' />
                                            </Control>
                                        </Field>
                                        <Field>
                                            <Label>Subject:</Label>
                                            <Control>
                                                <Input placeholder='Once in a Lifetime' />
                                            </Control>
                                        </Field>
                                    </Column>
                                    <Column isSize="2/3">
                                        <Field>
                                        <Label>Message</Label>
                                        <FieldBody>
                                            <Field>
                                                <Control>
                                                    <TextArea className="messageBox" placeholder='This is not my beautiful house. This is not my beautiful wife. How did I get here?' />
                                                </Control>
                                            </Field>
                                        </FieldBody>
                                        </Field>

                                        <Field>
                                        <FieldLabel /> {/* empty for spacing */}
                                        <FieldBody>
                                            <Field>
                                                <Control>
                                                    <Button>Submit</Button>
                                                </Control>
                                            </Field>
                                        </FieldBody>
                                        </Field>
                                    </Column>
                                </Columns>
                            </form>
                        </Column>
                    </Columns>
                </Section>
            </div>
        )
    }
}

export default Contact;