import React, { Component } from 'react'
import "./About.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button } from "@material-ui/core"
import LinkedIn from '@material-ui/icons/LinkedIn';


class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="cardabout">
                    <h3>APP CREATED BY DAVID</h3>
                    <p>Find more about me in:</p>
                    <a href="https://www.linkedin.com/in/david-lmp/" rel="noreferrer" target="_blank" className="link">
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<LinkedIn />}
                            className="btnlink"
                        >
                            LinkedIn
                        </Button>
                    </a>
                    <a href="https://github.com/DavidLMP1" rel="noreferrer" target="_blank" className="link">
                        <Button
                            variant="contained"
                            color="contrast"
                            startIcon={<GitHubIcon />}
                            className="btnlink"
                        >
                            Github
                        </Button>
                    </a>
                </div>
            </div>
        )
    }
}

export default (About)
