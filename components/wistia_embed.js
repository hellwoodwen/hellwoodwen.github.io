import React from 'react'

class WistiaEmbed extends React.Component {
    constructor(props) {
        super(props);

        window._wq = window._wq || [];

        _wq.push({
            id: this.props.hashedId,
            options: {
                playerColor: this.props.playerColor
            }
        });
    }


    render() {
        return (
            <div>
                <div className={
                        `wistia_embed wistia_async_${
                            this.props.hashedId
                        }`
                    }
                    style={
                        {
                            height: '360px',
                            width: '640px'
                        }
                }>&nbsp;</div>
            </div>
        )
    }

    componentDidMount() {
        if (!document.getElementById("wistia_script")) {
            var wistiaScript = document.createElement("script");
            wistiaScript.id = "wistia_script"
            wistiaScript.type = "text/javascript"
            wistiaScript.src = "https://fast.wistia.com/assets/external/E-v1.js"
            wistiaScript.async = true
            document.body.appendChild(wistiaScript);
        }

        window._wq = window._wq || [];
        _wq.push({
            id: this.props.hashedId,
            onReady: (video) => {
                this.handle = video;
            }
        });
    }

    componentWillUnmount() {
        console.log("unmounting");
        this.handle && this.handle.remove();
    }
}

export default WistiaEmbed
