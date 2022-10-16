with import <nixpkgs> { };

pkgs.mkShell {
    buildInputs = [
        nodejs-14_x
        yarn
        nodePackages.yarn
    ];
}