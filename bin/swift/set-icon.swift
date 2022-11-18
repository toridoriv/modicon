#!/usr/bin/env swift

import AppKit

var target = CommandLine.arguments[1];
var icon = CommandLine.arguments[2];

var sharedWorkspace = NSWorkspace.shared;
var newImage: NSImage! = NSImage.init(contentsOfFile: icon);

sharedWorkspace.setIcon(newImage, forFile: target);
