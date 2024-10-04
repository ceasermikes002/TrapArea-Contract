// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract TrapeziumArea {
    function calculateArea(uint256 base1, uint256 base2, uint256 height) public pure returns (uint256) {
        return ((base1 + base2) * height) / 2;
    }
}
