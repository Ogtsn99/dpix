module.exports = async ({
	                        getNamedAccounts,
	                        deployments,
	                        getChainId,
	                        getUnnamedAccounts,
                        }) => {
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();
	
	let result = await deploy("DPixToken", {
		from: deployer,
		args: ["DPixToken", "DPXT", "10000000000000000000000"]
	});
	console.log("DPixToken address is", result.address);
	
	result = await deploy("DPix", {
		from: deployer,
		args: [result.address]
	});
	
	console.log("DPix address is", result.address);
};
