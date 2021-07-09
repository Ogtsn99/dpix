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
	
	const dpixTokenAddress = result.address;
	
	result = await deploy("DPix", {
		from: deployer,
		args: [result.address]
	});
	
	const dpixAddress = result.address;
	
	console.log("DPixToken address is", dpixTokenAddress);
	console.log("DPix address is", dpixAddress);
};
