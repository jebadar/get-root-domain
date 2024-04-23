function extractHostname(url) {
    let hostname;
    if (url.indexOf("//") > -1) {
        hostname = url.split("/")[2];
    } else {
        hostname = url.split("/")[0];
    }
    hostname = hostname.split(":")[0];
    hostname = hostname.split("?")[0];
    return hostname;
}
function extractRootDomain(domain) {
    const splitArr = domain.split("."),
        arrLen = splitArr.length;
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + "." + splitArr[arrLen - 1];
        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
            domain = splitArr[arrLen - 3] + "." + domain;
        }
    }
    return domain;
}

function getDomain(hostname) {
    const arr = hostname.split(".");
    hostname = hostname.replace(arr[0], "");
    hostname.substr(1);
    return hostname;
}

export function get_root_domain(url) {
    const host = extractHostname(url);
    const rootName = extractRootDomain(host);
    const domain = getDomain(rootName);
    return {
        host: host,
        root: rootName,
        domain: domain
    }
}