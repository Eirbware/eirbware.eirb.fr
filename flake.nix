{
    description = "A flake to package eirbware.eirb.fr in nix";

    inputs.flake-parts.url = "github:hercules-ci/flake-parts";
    inputs.nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

    outputs = inputs @ {
        nixpkgs,
        flake-parts,
        self,
        ...
    }: let
        pkgs = nixpkgs.legacyPackages.${pkgs.stdenv.hostPlatform.system};
    in
        flake-parts.lib.mkFlake {inherit inputs;} (
            top @ {
                config,
                withSystem,
                moduleWithSystem,
                lib,
                ...
            }: {
                systems = [
                    "x86_64-linux"
                    "x86_64-darwin"
                    "aarch64-linux"
                    "aarch64-darwin"
                ];
                flake = {
                    devShells.default = import ./shell.nix {inherit pkgs;};
                };
                perSystem = {
                    config,
                    pkgs,
                    lib,
                    system,
                    ...
                }: let
                    manifest = (pkgs.lib.importTOML ./Manifest.toml).package;
                in {
                    _module.args.pkgs = import self.inputs.nixpkgs {
                        inherit system;
                        config.allowUnfree = true;
                    };
                    packages.default = pkgs.buildNpmPackage {
                        meta = {
                            description = "Eirbware's website";
                            homepage = "https://eirbware.eirb.fr/";
                            license = lib.licenses.cc-by-nc-sa-40;
                            maintainers = manifest.authors;
                        };
                        name = manifest.description;
                        pname = manifest.name;
                        version = manifest.version;
                        installPhase = ''
                            mkdir -p $out
                            mv dist/* $out
                        '';
                        npmDepsHash = "sha256-9csaLXVqlO1plFRziQpvkomE6o4wBFbfkXk8efd6Ztk=";
                        src = ./.;
                    };
                };
            }
        );
}
