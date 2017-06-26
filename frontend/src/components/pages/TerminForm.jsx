import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, FormLabel, FormInput, Button, GridCol, GridRow, ContentBlock, ButtonsSegmented} from 'framework7-react';

const onChangeHandler = (event) => {
    console.log('change');
};

const pStyle = {margin: '1em 0'};

export class TerminForm extends React.Component<any, any> {
    
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            name: `${props.value}`,
            birthDate: '2014-04-30',
            radioSelected: 1
        };        
    }

    onRadioChange(value) {
        this.setState({
           ...this.state,
           radioSelected: value 
        });
    }    

    onNameChange(event) {
         this.setState({
              ...this.state,
              name: event.target.value
          });
    }
    render() {
        return (
            <Page>
                <Navbar backLink="Back" backLinkUrl={`#/${this.props.list_idx}/${this.state.name}`} title={`Termin pentru '${this.state.name}'`} sliding />

                <ContentBlockTitle>Pacient</ContentBlockTitle>
                <List form>
                    <ListItem>
                        <FormLabel>Nume</FormLabel>  
                        <FormInput type="text" placeholder="nume" value={this.state.name} onChange={this.onNameChange.bind(this)}/>   
                    </ListItem>
                    <ListItem>
                        <FormLabel>Prenume</FormLabel>  
                        <FormInput type="text" placeholder="prenume"  defaultValue={this.props.pos_id}/>   
                    </ListItem>                
                    <ListItem>
                        <FormLabel>Telefon</FormLabel>  
                        <FormInput type="tel" placeholder="Phone" />   
                    </ListItem>                
                    <ListItem>
                        <FormLabel>Birth date</FormLabel>  
                        <FormInput type="date" placeholder="Birth date" defaultValue={this.state.birthDate} />   
                    </ListItem>
                    <ListItem>
                        <FormLabel>Planificat la ora</FormLabel>  
                        <FormInput type="datetime-local" />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Tratament</FormLabel>  
                        <FormInput type="text" placeholder="prenume" />   
                    </ListItem>                
                            
                    <ListItem>
                        <FormLabel>Gender</FormLabel>
                        <FormInput type="select">
                            <option value="1">Male</option>
                            <option value="1">Female</option>
                        </FormInput>
                    </ListItem>
                    <ListItem>
                        <FormLabel>Switch</FormLabel>
                        <FormInput type="switch" onChange={onChangeHandler} />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Range</FormLabel>  
                        <FormInput type="range" min="0" max="100" step="1" value="90" />
                    </ListItem>
                    <ListItem>
                        <FormLabel>Textarea</FormLabel>
                        <FormInput type="textarea" placeholder="Textarea" />
                    </ListItem>
                </List>

                <ContentBlock inner>
                    <GridRow style={pStyle}>
                        <GridCol><Button big fill color="green">Salveasa</Button></GridCol>
                        <GridCol><Button big fill color="red">Nu Salveasa</Button></GridCol>
                    </GridRow>                          
                </ContentBlock>
            </Page>
        );
    }
};
