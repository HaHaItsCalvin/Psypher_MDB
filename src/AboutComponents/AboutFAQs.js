import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const panel={
};

const summary={
	backgroundColor:'#3CDBC0',
};

const question={
	color:'white',
};

class AboutFAQ extends React.Component {
	state = {
		  collapseID: ""
		}

		toggleCollapse = (collapseID) => {
		  this.setState(prevState => ({
		    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
		  }));
	}
	render(){
		return(
			 <ExpansionPanel style={panel}>
		        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={summary}>
		          <Typography variant='h6' style={question}>{this.props.question}</Typography>
		        </ExpansionPanelSummary>
		        <ExpansionPanelDetails>
		          <Typography>
		            {this.props.answer}
		          </Typography>
		        </ExpansionPanelDetails>
	      	</ExpansionPanel>
		)
	}
}
export default AboutFAQ;